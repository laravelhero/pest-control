import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';

/** @param {import('alpinejs').Alpine} Alpine */
export default (Alpine) => {
  Alpine.plugin(intersect);
  Alpine.plugin(collapse);

  // Contact / quote form behaviour (client-side validation only).
  Alpine.data('quoteForm', () => ({
    f: { name: '', phone: '', email: '', zip: '', msg: '' },
    e: {},
    sent: false,
    clear(k) {
      if (this.e[k]) delete this.e[k];
    },
    submit() {
      this.e = {};
      if (!this.f.name.trim()) this.e.name = 'Please enter your name.';
      if (!this.f.phone.trim()) this.e.phone = 'Please enter your phone.';
      if (!this.f.email.trim()) this.e.email = 'Please enter your email.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.f.email)) this.e.email = 'Enter a valid email.';
      if (Object.keys(this.e).length) return;
      /* → In production, POST this.f to your CRM / email handler here. */
      this.sent = true;
      this.f = { name: '', phone: '', email: '', zip: '', msg: '' };
    },
  }));
};
