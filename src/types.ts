export interface FoodType {
   id: number;
   name: string;
   description: string;
   price: string;
   available: boolean;
   image: string;
}

export interface FoodProps{
   food: FoodType | undefined;
   handleEditFood: Function;
   handleDelete: Function;
}

export interface ModalAddFoodProps{
   isOpen: boolean; 
   setIsOpen: Function;
   handleAddFood: Function;
}

export interface ModalEditFoodProps{
   isOpen: boolean;
   setIsOpen: Function;
   handleUpdateFood: Function;
   editingFood: FoodType | undefined;
}