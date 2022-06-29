import { Component, createRef, FC, forwardRef, HTMLProps } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

interface InputCheckBoxProps extends HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  price: number;
  icon: string;
  description: string;
}

const ModalEditFood = forwardRef<HTMLInputElement, InputCheckBoxProps>(
  function ModalEditFood(
    { name, description, price, icon, id, ...props },
    ref
  ): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [Edit, setEdit] = useState<InputCheckBoxProps>();

    const handleEdit = useCallback(async (editFood: InputCheckBoxProps) => {
      Edit;
    }, []);

    const openForm = () => {
      setIsOpen(true);
    };

    return (
      <Modal isOpen={isOpen} setIsOpen={openForm}>
        <Form ref={ref} onSubmit={openForm} onClick={handleEdit}>
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

export default ModalEditFood;
