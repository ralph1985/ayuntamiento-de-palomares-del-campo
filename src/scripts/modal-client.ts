import '@project-manager/lit-modal';

const initModal = () => {
  const modal = document.querySelector('#demo-modal') as any;
  const openButtons = [
    document.querySelector('#open-modal'),
    document.querySelector('#open-modal-muted')
  ];
  const closeButton = document.querySelector('#close-modal');

  if (!modal) return;

  const wireUp = () => {
    openButtons.forEach((button) =>
      button?.addEventListener('click', () => modal.openModal())
    );

    closeButton?.addEventListener('click', () => modal.close());

    modal.addEventListener('pm-close', () => {
      openButtons[0]?.focus();
    });
  };

  if (customElements.get('pm-modal')) {
    wireUp();
  } else {
    customElements.whenDefined('pm-modal').then(wireUp);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal, { once: true });
} else {
  initModal();
}
