import React from 'react'

const Card = ()=>{
    return (
 <div className="card mx-2 my-0">
  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nemo labore excepturi exercitationem ut quisquam quo minima, esse quis dolorum soluta, modi reiciendis neque quod? Quo delectus fugit dignissimos itaque!</p>
    <div className='button class="button d-flex justify-content-center bg-secondary bg-opacity-10'>
    <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div>
</div>

)
}

export default Card;

