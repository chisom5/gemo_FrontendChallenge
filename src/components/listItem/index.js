import React from 'react';

const ListItem =()=> {
    return (
        <div className='list__container'>
            <div className='list__avatar'>
                    <p>Owner avatar</p>
            </div>

            <section className='list__content'>
                <h2>Repository Name</h2>
                <p>Repository description</p>
                <span className='list__content_otherdescription'></span>
            </section>
        </div>
    )
}

export default ListItem;