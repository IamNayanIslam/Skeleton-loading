

const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
        <div className="relative h-80 mb-4">
            <img src="./headphones.jpg" alt=""  className="absolute w-full h-full object-cover rounded"/>
        </div>
        <div>
            <p className="font-semibold">Apple Headphones</p>
            <p className="text-sm pb-2">Price: $298</p>
            <p className="font-thin text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime ad inventore eveniet delectus! Tenetur maxime fuga enim recusandae provident.</p>
        </div>
    </div>
  )
}

export default Card