function dec(btn) {
    const span = btn.querySelector('.displayCounter');
    const current = Number(span.textContent);
    if (current > 0) {
        span.textContent = current - 1;
    }
}