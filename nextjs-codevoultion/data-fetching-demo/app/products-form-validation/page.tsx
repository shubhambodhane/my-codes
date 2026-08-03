"use client";
import { useActionState } from "react";
import { FormState, createProduct } from "../actions/products";

export default function ProductsCreateWithValidation() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(createProduct, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label>
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label>
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label>
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
