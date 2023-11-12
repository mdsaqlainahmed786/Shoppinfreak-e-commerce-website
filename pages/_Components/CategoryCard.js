export default function CategoryCard({image, price, title, description}) {
  return(
    <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
<div className="flex mt-36 justify-center antialiased text-gray-900 -ml-2">
  <div className="w-64 pl-1 flex items-center justify-center">
    <div className="bg-white rounded-lg overflow-hidden shadow-xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">

      <img className="h- w-full object-cover object-end" src={image} alt="image here" />
      <div className="p-3">
           <h4 className="font-semibold text-lg leading-tight truncate pr-5">{title}</h4>
        <div className="mt-1">
          <span>${price}/-</span>
        </div>
        <div className="mt-2 flex items-center text-[13px]">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
        </div>
        <div className="flex py-4 ">{description}...</div>
        <div>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full mt-4 ml-1 group bg-transparent border-2 border-orange-600 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200">
<span class="relative px-2 py-1.5transition-all ease-in duration-75 text-transparent bg-clip-text text-sm bg-gradient-to-r from-orange-400 to-red-700 rounded-md group-hover:bg-opacity-0">
Add to Cart
</span>
</button>
<span className="ml-6 text-sm text-neutral-400">100+ Reviews</span>
        </div>
      </div>
    </div>
  </div>
</div>
    
    </>
    )
}