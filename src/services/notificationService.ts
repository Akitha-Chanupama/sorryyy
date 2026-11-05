import { CONFIG } from '../config';

export interface ResponsePayload {
  choice: 'forgive' | 'angry';
  choiceText: string;
  timestamp: string;
}

// Generate pre-filled WhatsApp link
export const getWhatsAppLink = (payload: ResponsePayload): string => {
  const cleanPhone = CONFIG.phoneNumber.replace(/[^0-9]/g, '');
  const text = payload.choice === 'forgive'
    ? 'Hey Akitha! I saw your cute website... I forgive you and I love you 💙 Call me once lectures end!'
    : 'Hey Akitha, I saw your website... I am still a little angry with you 🥺 Please call me after lectures!';
  
  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  }
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
};

// Generate pre-filled Mailto link
export const getMailtoLink = (payload: ResponsePayload): string => {
  const subject = payload.choice === 'forgive'
    ? '💙 I forgive you and I love you!'
    : '🥺 Update: Still a little angry';
  const body = payload.choice === 'forgive'
    ? `Hey Akitha,\n\nI saw your little apology website! I forgive you and I love you so much 💙\n\nCall me once lectures are finished! 🥰`
    : `Hey Akitha,\n\nI saw your website... I am still a little bit angry with you 🥺\n\nMake sure to call me once my lectures end! 💙`;

  return `mailto:${CONFIG.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const sendResponseNotification = async (payload: ResponsePayload): Promise<{ success: boolean; message: string }> => {
  // If Web3Forms Access Key is provided (Recommended for 100% deliverability)
  if (CONFIG.web3FormsAccessKey && CONFIG.web3FormsAccessKey.trim() !== '') {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: CONFIG.web3FormsAccessKey.trim(),
          subject: payload.choice === 'forgive'
            ? '💙 Good news! She said: I forgive you and I love you!'
            : '🥺 Update: She said she is still a little angry with you',
          from_name: 'A Little Reminder 💙',
          Response: payload.choiceText,
          Status: payload.choice === 'forgive' ? 'FORGIVEN 💙' : 'STILL ANGRY 🥺',
          Time: payload.timestamp,
          Reminder: 'Remember to call her once her lectures are finished!',
        }),
      });

      if (res.ok) {
        return { success: true, message: 'Response delivered to email! 💌' };
      }
    } catch (err) {
      console.error('Web3Forms submission failed:', err);
    }
  }

  // Fallback to FormSubmit invisible iframe submission
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
    console.error('FormSubmit iframe failed:', err);
  }

  return { success: true, message: 'Response recorded with love! 💌' };
};
