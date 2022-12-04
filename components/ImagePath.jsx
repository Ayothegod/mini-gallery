const ImagePath = (props) => {
  return (
    <div className=" p-3 shadow-lg bg-white rounded-md  ">
      <img
        src={props.urls.small}
        alt={props.user.username}
        loading="lazy"
        className="h-52 lg:h-72 w-full object-cover rounded-md"
      />
      <div className="text-sm flex mt-3 items-center justify-between">
      <div className="flex items-center">
          <img
            src={props.user.profile_image.small}
            alt={props.user.username}
            className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-full border border-slate-400"
          />
          <div>
            <p className="font-semibold text-sm ml-1">{props.user.name}</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center font-semibold underline cursor-pointer">
            <p>@{props.user.first_name.split(" ",1)}</p>
          </div>
          <p className="text-[12px]">{props.likes} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePath;
