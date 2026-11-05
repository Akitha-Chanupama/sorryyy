import { CONFIG } from '../config';

export interface ResponsePayload {
  choice: 'forgive' | 'angry';
  choiceText: string;
  timestamp: string;
}

export const sendResponseNotification = async (payload: ResponsePayload): Promise<{ success: boolean; message: string }> => {
  // If user hasn't replaced the placeholder email yet, gracefully log and succeed
  if (!CONFIG.recipientEmail || CONFIG.recipientEmail === 'your-email@example.com') {
    console.log('[Notification Preview] Her response:', payload);
    return {
      success: true,
      message: 'Preview mode (set your real email in src/config.ts to receive in inbox)',
    };
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONFIG.recipientEmail.trim())}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: payload.choice === 'forgive'
          ? '💙 Good news! She said: I forgive you and I love you!'
          : '🥺 Update: She said she is still a little angry with you',
        Response: payload.choiceText,
        Status: payload.choice === 'forgive' ? 'FORGIVEN 💙' : 'STILL ANGRY 🥺',
        Time: payload.timestamp,
        Reminder: 'Remember to call her once her lectures are finished!',
      }),
    });

    if (res.ok) {
      return { success: true, message: 'Response sent to email!' };
    } else {
      return { success: false, message: 'Could not send email' };
    }
  } catch (error) {
    console.error('Failed to send notification email:', error);
    return { success: false, message: 'Network error sending response' };
  }
};
