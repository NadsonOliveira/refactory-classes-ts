import { FC, useCallback, useState } from "react";
import api from "services/api";
import { FoodsContainer } from "./styles";

interface FoodProps {
  food: {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
  };
  foods: [];
  editingFood: [];
  available: boolean;
}
const Dashboard: FC = (props: FoodProps) => {
  const [state, setState] = useState();
  const [foods, setFoods] = useState<string>();
  const [fod, setFod] = useState([]);
  const [idFood, setIdFood] = useState<FoodProps>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState();
  const [editingFood, setEditingFood] = useState();

  const handleAddFood = useCallback(async (food: FoodProps) => {
    try {
      const response = await api.post("/foods", {
        ...food,
        available: true,
      });

      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleUpdateFood = useCallback(async (food: FoodProps) => {
    try {
      await api.put(`/foods/${food.food.id}`, {
        food: food.food.id,
        ...food,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeleteFood = useCallback(async (food: FoodProps) => {
    await api.delete(`/foods/${food.food.id}`);

    const foodsFilter = fod.filter((food) => props.food.id !== food.food.id);
    setFod(foodsFilter);
  }, []);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const toggleEditModal = () => {
    setModalOpen(true);
  };
  const handleEditFood = (food) => {
    setModalOpen(true);
  };
  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {fod &&
          fod.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
