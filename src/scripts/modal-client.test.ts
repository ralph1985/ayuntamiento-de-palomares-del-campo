// @vitest-environment jsdom
import { initModal } from './modal-client';

type FakeModal = HTMLElement & {
  openCount: number;
  closeCount: number;
  openModal: () => void;
  close: () => void;
};

const setupFakeModal = () => {
  const modal = document.querySelector('#demo-modal') as FakeModal;

  modal.openCount = 0;
  modal.closeCount = 0;
  modal.openModal = () => {
    modal.openCount += 1;
  };
  modal.close = () => {
    modal.closeCount += 1;
  };

  return modal;
};

describe('modal-client wiring', () => {
  let modal: FakeModal;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="open-modal">Abrir</button>
      <button id="open-modal-muted">Abrir suave</button>
      <pm-modal id="demo-modal"></pm-modal>
      <button id="close-modal">Cerrar</button>
    `;

    modal = setupFakeModal();
  });

  it('invoca openModal al pulsar botones de apertura', () => {
    initModal();
    const open = document.querySelector('#open-modal') as HTMLButtonElement;
    const openMuted = document.querySelector(
      '#open-modal-muted'
    ) as HTMLButtonElement;

    open.click();
    openMuted.click();

    expect(modal.openCount).toBe(2);
  });

  it('invoca close al pulsar el botón de cerrar', () => {
    initModal();
    const close = document.querySelector('#close-modal') as HTMLButtonElement;

    close.click();

    expect(modal.closeCount).toBe(1);
  });
});
