import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://mysterious-reef-45154.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Item Added');
                    data.target.reset();
                };
            })
    };

    return (
        <div className='text-center border my-4 p-5 get-in-touch'>
            <h2 className='title'>Add Items</h2>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 input-text js-input' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2 input-text js-input' placeholder='Price' type="number" {...register("price")} />

                <input className='mb-2 input-text js-input' placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='mb-2 input-text js-input' placeholder='Supplier Name' type="text" {...register("supplier")} />

                <textarea className='mb-2 input-text js-input' placeholder='Description' {...register("description")} />

                <input className='mb-2 input-text js-input' placeholder='Photo URL' type="text" {...register("img")} />

                <button className="submit-btn" type="submit" >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddItem;