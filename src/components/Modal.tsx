import { FC, useContext, useEffect, useState } from 'react';
import { ModalContext } from '../configs/modalContext';
import { TIMEOUT_BUTTON } from '../configs/constants';
import { Button } from './Button';

import Icon from '../assets/alert.svg?react';

import './style.css';

interface Props {
  subProcess: string;
}

export const Modal: FC<Props> = ({ subProcess }) => {
  const { toggleModal } = useContext(ModalContext);
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    let timerId: number | null = null;
    if (disabledBtn) {
      timerId = setTimeout(() => {
        setDisabledBtn(false);
      }, TIMEOUT_BUTTON);
    }

    return () => {
      clearTimeout(timerId!);
    };
  }, [disabledBtn]);

  const closeModal = () => {
    toggleModal(false);
  }

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-70" />
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="flex flex-col rounded-xl bg-white shadow-xl p-6 text-left modal">
            <div>
              <Icon />
              <h4 className="mt-3 text-lg break-words">
                Delete subprocess {subProcess}
              </h4>
              <p className="mt-3 text-sm font-normal break-words modal-secondary-text">
                Are your sure you want to delete this subprocess? This action cannot be undone
              </p>
            </div>
            <div className="mt-7">
              <Button
                className="modal-button-cancel"
                title="Cancel"
                onClick={closeModal}
              />
              <Button
                className="mt-3 sm:mt-0 sm:ml-3 modal-button-delete"
                title="Delete"
                onClick={() => {
                  // do delete ...
                  closeModal();
                }}
                disabled={disabledBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
