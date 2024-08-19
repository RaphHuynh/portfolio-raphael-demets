import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const pricingOptions = [
    { duration: '8 min', price: '30€' },
    { duration: '10 min', price: '40€' },
    { duration: '16 min', price: '50€' },
    { duration: '20 min', price: '60€' },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

export default function Pricing() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        success: false,
        error: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formState;

        if (name && email && subject && message) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_USER_ID
            ).then((result) => {
                console.log(result.text);
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    success: true,
                    error: false
                });
            }, (error) => {
                console.log(error.text);
                setFormState({
                    ...formState,
                    success: false,
                    error: true
                });
            });
        } else {
            setFormState({
                ...formState,
                success: false,
                error: true
            });
        }
    };

    return (
        <section className='py-16 bg-gray-100' id='Pricing'>
            <div className='px-8 lg:px-32 flex flex-col'>
                <motion.h2
                    className='text-2xl md:text-3xl lg:text-4xl text-red-500 font-bold text-center mb-8'
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    Tarifs de Montage Vidéo
                </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    {pricingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className='bg-white p-6 rounded-lg shadow-md  text-center'
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            style={{ transitionDelay: `${0.2 * index}s` }}
                        >
                            <h3 className='text-xl font-bold text-red-500 mb-2'>{option.duration}</h3>
                            <p className='text-lg text-slate-700'>{option.price}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className='bg-white py-6 px-9 rounded-lg shadow-md '
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <h3 className='text-xl text-slate-700 mb-4 text-center text-menu'>Contactez-moi</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-8 h-full'>
                            <div className='w-1/2 flex flex-col gap-4'>
                                <div className='flex-grow'>
                                    <label htmlFor='name' className='block text-slate-700 mb-2'>Nom</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formState.name}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <div className='flex-grow'>
                                    <label htmlFor='email' className='block text-slate-700 mb-2'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formState.email}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <div className='flex-grow'>
                                    <label htmlFor='subject' className='block text-slate-700 mb-2'>Objet</label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor='message' className='block text-slate-700 mb-2'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formState.message}
                                    onChange={handleChange}
                                    className='w-full p-2 border border-gray-300 rounded flex-grow'
                                    required
                                />
                            </div>
                        </div>
                        <div className='text-center pt-9'>
                            <button
                                type='submit'
                                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                            >
                                Envoyer
                            </button>
                        </div>
                        {formState.success && <p className='text-green-500 text-center mt-4'>Votre message a été envoyé avec succès !</p>}
                        {formState.error && <p className='text-red-500 text-center mt-4'>Veuillez remplir tous les champs.</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}