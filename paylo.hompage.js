  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(e => e.forEach(x => { if(x.isIntersecting){x.target.classList.add('in');obs.unobserve(x.target)} }), {threshold:.1});
  els.forEach(el => obs.observe(el));

  const phone = document.querySelector(".phone-frame");
  const wrapper = document.querySelector(".phone-wrapper");

  window.addEventListener("scroll", () => {
    const rect = wrapper.getBoundingClientRect();

    // when wrapper hits top → expand
    if (rect.top <= 0) {
      phone.classList.add("expand");
    } else {
      phone.classList.remove("expand");
    }
  });