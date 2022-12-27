import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const LatestBlog = () => {
        const blogData = [
            {
                id: 1,
                name: 'Pellentesque Habitant Morbi Tristique',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde est placeat incidunt, odit, labore porro enim quaerat accusamus quod cumque modi.',
                img: 'https://typescript-ecommerce-amitjs.netlify.app/assets/images/blog/blog-1.png',
                date:'13 Dec 2022',
                Views:380,
                bgClass: 'bg-gradient-to-r from-primary to-secondary'
            },
            {
                id: 2,
                name: 'Pellentesque Habitant Morbi Tristique',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde est placeat incidunt, odit, labore porro enim quaerat accusamus quod cumque modi.',
                img: 'https://typescript-ecommerce-amitjs.netlify.app/assets/images/blog/blog-3.png',
                date:'17 Dec 2022',
                Views:580,
                bgClass: 'bg-accent'
            },
            {
                id: 3,
                name: 'Pellentesque Habitant Morbi Tristique',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde est placeat incidunt, odit, labore porro enim quaerat accusamus quod cumque modi.',
                img: 'https://typescript-ecommerce-amitjs.netlify.app/assets/images/blog/blog-2.png',
                date:'6 Nov 2022',
                Views:400,
                bgClass: 'bg-gradient-to-r from-primary to-secondary'
            },
        ]
    return (
        <>
        <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>Our Latest Blog</h1>
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                blogData.map(card => <div
                    key={card.id}
                >
                <Zoom>
                <div className={`mx-auto w-96 bg-base-100 shadow-xl`}>
                    <figure><img className='w-full' src={card.img} alt="blog img" /></figure>
                    <div className='flex text-yellow-600 pl-4'>
                        <p className='mr-4'>{card.date}</p>
                        <p>Views: {card.Views}</p>
                    </div>
                    <div className="p-4">
                        <h2 className="card-title mb-4">{card.name}</h2>
                        <p>{card.description}</p>
                        <div className="card-actions mt-4">
                        <Link to='/blog'>
                        <button className="btn btn-warning">Read More</button>
                        </Link>
                        </div>
                    </div>
                </div>
                </Zoom>
                </div>)
            }
        </div>
        </>
    );
};

export default LatestBlog;