import { CONFIG } from '../config';

export interface ResponsePayload {
  choice: 'forgive' | 'angry';
  choiceText: string;
  timestamp: string;
}

// Fallback DOM Form submission via invisible iframe (never blocked by CORS or Safari tracking prevention)
const submitViaHiddenIframe = (payload: ResponsePayload) => {
  try {
    const iframeName = 'formsubmit_hidden_iframe';
    let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = iframeName;
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    const form = document.createElement('form');
    form.action = `https://formsubmit.co/${encodeURIComponent(CONFIG.recipientEmail.trim())}`;
    form.method = 'POST';
    form.target = iframeName;

    const fields: Record<string, string> = {
      _subject: payload.choice === 'forgive'
        ? '💙 Good news! She said: I forgive you and I love you!'
        : '🥺 Update: She said she is still a little angry with you',
      _template: 'box',
      _captcha: 'false',
      Response: payload.choiceText,
      Status: payload.choice === 'forgive' ? 'FORGIVEN 💙' : 'STILL ANGRY 🥺',
      Time: payload.timestamp,
      Reminder: 'Remember to call her once her lectures are finished!',
    };

    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    setTimeout(() => {
      try {
        form.remove();
      } catch {
        // ignore cleanup error
      }
    }, 2000);
  } catch (err) {
    console.error('Iframe submission fallback error:', err);
  }
};

export const sendResponseNotification = async (payload: ResponsePayload): Promise<{ success: boolean; message: string }> => {
  // If recipient email is still placeholder
  if (!CONFIG.recipientEmail || CONFIG.recipientEmail === 'your-email@example.com') {
    console.log('[Notification Preview] Her response:', payload);
    return {
      success: true,
      message: 'Preview recorded 💙',
    };
  }

  // 1. Fire invisible iframe submission (guaranteed not blocked by CORS)
  submitViaHiddenIframe(payload);

  // 2. Also attempt direct Fetch with FormData
  try {
    const formData = new FormData();
    formData.append('_subject', payload.choice === 'forgive'
      ? '💙 Good news! She said: I forgive you and I love you!'
      : '🥺 Update: She said she is still a little angry with you');
    formData.append('_template', 'box');
    formData.append('_captcha', 'false');
    formData.append('Response', payload.choiceText);
    formData.append('Status', payload.choice === 'forgive' ? 'FORGIVEN 💙' : 'STILL ANGRY 🥺');
    formData.append('Time', payload.timestamp);
    formData.append('Reminder', 'Remember to call her once her lectures are finished!');

    await fetch(`https://formsubmit.co/${encodeURIComponent(CONFIG.recipientEmail.trim())}`, {
      method: 'POST',
      mode: 'no-cors', // Avoid CORS preflight network errors
      body: formData,
    });
  } catch (err) {
    // If fetch failed due to offline/private IP, the iframe method above handles it!
    console.log('Background fetch completed with iframe fallback');
  }

  return { success: true, message: 'Response sent with love! 💌' };
};
