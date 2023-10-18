import { HiHeart } from "react-icons/hi";
import { useAppSelector } from "@/redux/hook";
import {
  useCreateWishListMutation,
  useDeleteWishListMutation,
  useGetSingleWishListsQuery,
} from "@/redux/features/wishList/wishListApi";
import Image from "next/image";
import Link from "next/link";
import Loader from "../shared/Loader";
import { Button } from "@material-tailwind/react";

const ProductCard = ({ product, isLoading }: any) => {
  const { user } = useAppSelector((state) => state.user);

  //wish list functionality
  const { data: wishData } = useGetSingleWishListsQuery(product?._id);
  const [
    createWishList,
    {
      isLoading: createWishLoading,
      isSuccess: createWishSuccess,
      isError: createWishError,
    },
  ] = useCreateWishListMutation();

  const [
    deleteWishlist,
    {
      isLoading: deleteWishLoading,
      isSuccess: deleteWishSuccess,
      isError: deleteWishError,
    },
  ] = useDeleteWishListMutation();

  const handleAddToWishlist = () => {
    if (user) {
      const wishListData = {
        userEmail: user?.email,
        productId: product?._id,
      };

      createWishList(wishListData);
    } else {
      console.log("");
    }
  };

  const handleRemoveFromWishList = () => {
    deleteWishlist(product._id);
  };


  if(isLoading){
    return <Loader/>
  }

  return (
    <div className={`card bg-base-100 shadow-xl cursor-pointer relative`}>
      <figure>
        <Image
          className="w-full h-72"
          src={product?.photoURL}
          alt="Product Image"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-2xl">{product?.name}</h2>
        <p>Price: ${product?.price}</p>

        <div className="absolute top-2 right-2">
          {!user || !wishData?.data ? (
            <button
              onClick={handleAddToWishlist}
              className="rounded-full tooltip"
            >
              {createWishLoading ? (
                <Loader />
              ) : (
                <HiHeart className="w-10 h-10 p-1 hover:bg-slate-200 rounded-full" />
              )}
            </button>
          ) : (
            <button
              onClick={handleRemoveFromWishList}
              className="rounded-full tooltip"
              data-tip="Delete Wish"
            >
              {deleteWishLoading ? (
                <Loader />
              ) : (
                <HiHeart className=" bg-red-500 hover:bg-red-400 text-white w-10 h-10 p-1 rounded-full tooltip" />
              )}
            </button>
          )}
        </div>
        <Link href={`/products/${product?._id}`}>
          <Button className="w-full my-1">view details...</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
