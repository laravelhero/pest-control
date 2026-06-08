import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';

/** @param {import('alpinejs').Alpine} Alpine */
export default (Alpine) => {
  Alpine.plugin(intersect);
  Alpine.plugin(collapse);

  // Contact / quote form behaviour — validates client-side, then submits to Web3Forms.
  Alpine.data('quoteForm', () => ({
    f: { name: '', phone: '', email: '', zip: '', msg: '' },
    e: {},
    sent: false,
    sending: false,
    error: '',
    botcheck: '', // honeypot — real users leave this empty
    clear(k) {
      if (this.e[k]) delete this.e[k];
    },
    async submit() {
      this.e = {};
      this.error = '';
      if (!this.f.name.trim()) this.e.name = 'Please enter your name.';
      if (!this.f.phone.trim()) this.e.phone = 'Please enter your phone.';
      if (!this.f.email.trim()) this.e.email = 'Please enter your email.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.f.email)) this.e.email = 'Enter a valid email.';
      if (Object.keys(this.e).length) return;

      const accessKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        this.error = 'Form is not configured yet. Please call us or try again later.';
        return;
      }

      this.sending = true;
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: 'New Free Quote Request — Hero Pest Control',
            from_name: 'Hero Pest Control Website',
            botcheck: this.botcheck,
            name: this.f.name,
            phone: this.f.phone,
            email: this.f.email,
            zip: this.f.zip,
            message: this.f.msg,
          }),
        });
        const data = await res.json();
        if (data.success) {
          this.sent = true;
          this.f = { name: '', phone: '', email: '', zip: '', msg: '' };
        } else {
          this.error = data.message || 'Something went wrong. Please try again.';
        }
      } catch {
        this.error = 'Network error. Please check your connection and try again.';
      } finally {
        this.sending = false;
      }
    },
  }));
};
