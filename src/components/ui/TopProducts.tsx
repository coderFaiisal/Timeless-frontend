import Image from "next/image";

const TopProducts = async () => {
  const res = await fetch(
    "https://timeless-backend-coderfaiisal.vercel.app/api/v1/products"
  );
  const data = await res.json();

  return (
    <div className="my-4 lg:my-12">
      <div className="text-center pt-8">
        <h1 className="text-3xl font-semibold">OUR TOP 10 PRODUCTS</h1>
        <p className="text-sm opacity-60">
          Here You Can Find Best Of Our Products
        </p>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-10">
        {data?.data?.slice(0, 10)?.map((product: any) => (
          <div key={product?._id}>
            <div className="">
              <Image
                src={product?.images}
                alt="feature image"
                className="h-40 lg:h-56"
                width={500}
                height={400}
              />
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-sm opacity-60">{product?.title}</h1>
              <p>$ {product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
