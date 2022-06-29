import { Component, createRef, FC, forwardRef, HTMLProps } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { useRef } from "react";
import { useState } from "react";

interface InputCheckBoxProps extends HTMLProps<HTMLInputElement> {
  name: string;
  price: number;
  icon: string;
  description: string;
}

const ModalAddFood = forwardRef<HTMLInputElement, InputCheckBoxProps>(
  function ModalAddFood(
    { name, description, price, icon, ...props },
    ref
  ): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openForm = () => {
      setIsOpen(true);
    };

    return (
      <Modal isOpen={isOpen} setIsOpen={openForm}>
        <Form ref={ref} onSubmit={openForm}>
          <h1>Novo Prato</h1>
          <Input name={name} placeholder="Cole o link aqui" />

          <Input name={name} placeholder="Ex: Moda Italiana" />
          <Input name={price} placeholder="Ex: 19.90" />

          <Input name={description} placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
);

export default ModalAddFood;
