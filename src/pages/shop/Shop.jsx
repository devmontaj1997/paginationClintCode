import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuDot } from "react-icons/lu";
import gasline from "../../assets/images/gasline.webp";
import engine from "../../assets/images/engine.webp";
import Mileage from "../../assets/images/Mileage.webp";
import Transmission from "../../assets/images/Transmission.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationSelector } from "../../feature/pagination/paginationSlice";
import { getCarsApiSlice } from "../../feature/pagination/paginationAPISlice";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";


const Shop = () => {
  const { cars, currentPage, totalPages } = useSelector(paginationSelector);

  const [changePage, setchangePage] = useState(1);

  const dispatch = useDispatch();
  // pagination btn

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      alert(" This Is Last Page, Please Enter Prev Button");
    }
    if (currentPage < totalPages) {
      setchangePage(currentPage + 1);
    }
  };
  // pageChange on click number
  const handlePageChange = (index) => {
    setchangePage(index);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      alert(" This Is First Page, Please Enter Next Button");
    }
    if (currentPage > 1) {
      setchangePage(currentPage - 1);
    }
  };
  // Pagination with Ellipses Logic (Show only 8 buttons)
  const createPaginationRange = () => {
    const range = [];
    const delta = 1; // Number of pages to show around the current page

    // Always show the first page
     range.push(1);

    // If totalPages <= 8, show all pages, otherwise apply the logic
    if (totalPages <= 1) {
      for (let i = 1; i < totalPages; i++) {
        range.push(i);
      }
    } else {
      const rangeStart = Math.max(2, currentPage - delta);
      const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

      // Add ellipsis if needed before the range
      if (rangeStart > 1) {
        range.push("ellipsis-1");
      }

      // Show the range of pages around the current page
      for (let i = rangeStart; i <= rangeEnd; i++) {
        range.push(i);
      }

      // Add ellipsis if needed after the range
      if (rangeEnd < totalPages - 1) {
        range.push("ellipsis-2");
      }
    }

    // Always show the last page if totalPages > 1
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const paginationRange = createPaginationRange();
  useEffect(() => {
    dispatch(getCarsApiSlice(changePage));
  }, [dispatch, changePage]);
  return (
    <>
      <div className="mainDiv">
        {/* banner Section  Start */}
        <div className="bannerSection bg-[#eef6fa] lg:py-[100px] sm:py-[80px] xsm:py-[60px] xxxsm:py-[50px] ">
          <div className="container">
            <div className="pageTittle text-center ">
              <h1 className="sm:text-5xl xxxsm:text-3xl text-semibold mb-2">
                {" "}
                All Cars
              </h1>
              <h3 className="sm:text-lg">
                <span>Home /</span>
                <span>all-cars</span>
              </h3>
            </div>
          </div>
        </div>
        {/* banner Section End */}

        {/* filter section Start */}
        <div className="filterSection bg-[#dbe9f0] py-[40px]">
          <div className="container">
            <div className="filterArea xxxsm:hidden lg:block bg-white rounded-lg ">
              <form action="">
                <div className="parentDiv grid gap-x-5 grid-cols-12  items-center">
                  <div className="textSearch col-span-3">
                    <input
                      className="w-full outline-none ml-5 text-sm"
                      type="text"
                      placeholder="Car ID or owner/seller's name, phone or email"
                    />
                  </div>
                  <div className="statusSearch col-span-2">
                    <select
                      name="cars"
                      id="cars"
                      className="w-full outline-none"
                    >
                      <option value="">Status</option>
                      <option value="Rent">For Rent (3)</option>
                      <option value="Sale">For Sale (13)</option>
                    </select>
                  </div>
                  <div className="typeSearch col-span-2">
                    <select
                      name="cars"
                      id="cars"
                      className="w-full outline-none"
                    >
                      <option value="">Type</option>
                      <option value="Coupe">Coupe (6)</option>
                      <option value="Hatchback">Hatchback (2)</option>
                      <option value="Sedan">Sedan (4)</option>
                      <option value="Sport">Sport (1)</option>
                      <option value="SUV">SUV (1)</option>
                      <option value="Wagon">Wagon (2)</option>
                    </select>
                  </div>
                  <div className="manufacturerSearch col-span-2 ">
                    <select
                      name="cars"
                      id="cars"
                      className="w-full outline-none"
                    >
                      <option value="">Manufacturer</option>
                      <option value="Audi">Audi (3)</option>
                      <option value="BMW">BMW (5)</option>
                      <option value="Hyundai">Hyundai (1)</option>
                      <option value="Mercedes">Mercedes (1)</option>
                      <option value="Porsche">Porsche (2)</option>
                      <option value="Tesla">Tesla (2)</option>
                      <option value="Toyota">Toyota (1)</option>
                      <option value="Volkswagen">Volkswagen(1)</option>
                    </select>
                  </div>
                  <div className="citySearch">
                    <select
                      name="cars"
                      id="cars"
                      className="w-full outline-none"
                    >
                      <option value="">City</option>
                      <option value="Bangalore">Bangalore (1)</option>
                      <option value="Mumbai">Mumbai (1)</option>
                      <option value="audi">kolkata(0)</option>
                    </select>
                  </div>
                  <div className="moreFilter justify-self-end">
                    <button className="text-2xl">
                      <GiSettingsKnobs />
                    </button>
                  </div>
                  <div className="searchIcon justify-self-end bg-[#0040E4] py-[12px] px-[12px] rounded-e-lg">
                    <button className="text-3xl text-white">
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* mobile Filter start */}
            <div className="filterArea lg:hidden bg-white rounded-lg ">
              <form action="">
                <div className="parentDiv grid gap-x-4 sm:grid-cols-6 xxxsm:grid-cols-4 items-center">
                  <div className="textSearch sm:col-span-4 xxxsm:col-span-2">
                    <input
                      className="w-full outline-none ml-[5%] text-sm "
                      type="text"
                      placeholder="Car ID or owner/seller's name, phone or email"
                    />
                  </div>

                  <div className="moreFilter justify-self-end">
                    <button className="text-2xl">
                      <GiSettingsKnobs />
                    </button>
                  </div>
                  <div className="searchIcon justify-self-end bg-[#0040E4] py-[12px] px-[12px] rounded-e-lg">
                    <button className="text-3xl text-white">
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="moreFilterSection lg:hidden mt-5 grid grid-cols-2 gap-5 ">
              <div className="statusSearch ">
                <select
                  name="cars"
                  id="cars"
                  className="w-full p-3 rounded-lg outline-none"
                >
                  <option value="">Status</option>
                  <option value="Rent">For Rent (3)</option>
                  <option value="Sale">For Sale (13)</option>
                </select>
              </div>
              <div className="typeSearch ">
                <select
                  name="cars"
                  id="cars"
                  className="w-full p-3 rounded-lg outline-none"
                >
                  <option value="">Type</option>
                  <option value="Coupe">Coupe (6)</option>
                  <option value="Hatchback">Hatchback (2)</option>
                  <option value="Sedan">Sedan (4)</option>
                  <option value="Sport">Sport (1)</option>
                  <option value="SUV">SUV (1)</option>
                  <option value="Wagon">Wagon (2)</option>
                </select>
              </div>
              <div className="manufacturerSearch ">
                <select
                  name="cars"
                  id="cars"
                  className="w-full p-3 rounded-lg outline-none"
                >
                  <option value="">Manufacturer</option>
                  <option value="Audi">Audi (3)</option>
                  <option value="BMW">BMW (5)</option>
                  <option value="Hyundai">Hyundai (1)</option>
                  <option value="Mercedes">Mercedes (1)</option>
                  <option value="Porsche">Porsche (2)</option>
                  <option value="Tesla">Tesla (2)</option>
                  <option value="Toyota">Toyota (1)</option>
                  <option value="Volkswagen">Volkswagen(1)</option>
                </select>
              </div>
              <div className="citySearch ">
                <select
                  name="cars"
                  id="cars"
                  className="w-full p-3 rounded-lg outline-none"
                >
                  <option className="" value="">
                    City
                  </option>
                  <option value="Bangalore">Bangalore (1)</option>
                  <option value="Mumbai">Mumbai (1)</option>
                  <option value="audi">kolkata(0)</option>
                </select>
              </div>
            </div>

            {/* mobile Filter end */}
          </div>
        </div>

        {/* filter section  End */}

        {/*  Car Section Start */}
        <div className="container">
          <div className="carSection grid lg:grid-cols-3 sm:grid-cols-2 xxxsm:grid-cols-1   gap-5 my-14">
            {cars.length > 0
              ? cars.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="cardCar shadow-xl   border-2  bg-[#eef6fa] border-[#D3E5EE] rounded-xl  "
                    >
                      <div className="imgArea rounded-t-xl overflow-hidden relative ">
                        <img
                          className="rounded-t-xl transform transition-transform duration-300 hover:scale-110"
                          src={item.featureImage}
                          alt="Porsche"
                        />
                        <div className="bach">
                          <span className="bg-[#e72127] text-white py-1 px-4 rounded-lg absolute top-5 left-5">
                            {item.status}
                          </span>
                        </div>
                        <div className="priceArea">
                          <h2 className=" absolute bottom-5 left-5 text-2xl bg-[#fff] py-1 px-4 rounded-lg ">
                            ${item.price}
                          </h2>
                        </div>
                      </div>
                      <div className="contentArea px-5 ">
                        <div className="carTitle py-5">
                          <h1 className="text-2xl font-semibold">
                            {item.tittle}
                          </h1>
                          <span className="flex items-center">
                            {item.type}
                            <span>
                              {" "}
                              <LuDot />
                            </span>
                            {item.year}
                          </span>
                          <div className="devider w-full bg-[#D3E5EE] h-[1px] mt-4"></div>
                        </div>

                        <div className="carSpecifications ">
                          <div className="iconSection grid grid-cols-4 justify-items-center">
                            <div className="icon_1 ">
                              <img className="w-10" src={Mileage} alt="" />

                              <p>{item.mileage}</p>
                            </div>
                            <div className="icon_2">
                              <img className="w-10" src={engine} alt="" />
                              <p>{item.engine}</p>
                            </div>
                            <div className="icon_3">
                              <img className="w-10" src={gasline} alt="" />
                              <p>{item.fuel}</p>
                            </div>
                            <div className="icon_4">
                              <img className="w-10" src={Transmission} alt="" />
                              <p>{item.transmission}</p>
                            </div>
                          </div>
                          <div className="devider w-full bg-[#D3E5EE] h-[1px] mt-4"></div>
                        </div>
                        <div className="agentArea grid  grid-cols-[30%_40%_30%] py-5">
                          <strong>
                            City:{" "}
                            <p className="font-normal text-sm">{item.city}</p>
                          </strong>
                          <strong>
                            Agent:{" "}
                            <p className="font-normal text-sm">{item.agent}</p>
                          </strong>
                          <strong>
                            Added:{" "}
                            <p
                              className="font-normal text-xm
                            "
                            >
                              {new Date(item.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "2-digit",
                                  day: "2-digit",

                                  year: "numeric",
                                }
                              )}
                            </p>
                          </strong>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "NO CARS FOUNDS"}
          </div>
        </div>

        {/*  Car Section End */}

        {/* pagination section start */}
        <div className="container mx-auto">
          <div className="paginationSection bg-[#0040E4] inline-block mb-5 shadow-xl rounded-lg overflow-x-auto">
            <div className="flex items-center justify-center">
              <button
                className="prevBtn p-2 sm:p-3 xxxsm:p-1 border-r-2 border-white text-white"
                onClick={handlePrevPage}
              >
              <MdChevronLeft/>
              </button>

              {/* Render the pagination buttons */}
              {paginationRange.map((page) =>
                page === "ellipsis-1" || page === "ellipsis-2" ? (
                  <span key={page} className="p-2 border-r-2 sm:p-3 xxxsm:p-1 text-white">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={
                      currentPage === page
                        ? "paginationActive p-2 sm:p-3 border-r-2 text-white bg-[#0028E4]"
                        : "p-2 sm:p-3 xxxsm:p-1 text-white border-r-2"
                    }
                  >
                    {page}
                  </button>
                )
              )}

              <button
                className="next p-2 sm:p-3 xxxsm:p-1 text-white"
                onClick={handleNextPage}
              >
               <MdChevronRight/>
              </button>
            </div>
          </div>
        </div>

        {/* pagination section end */}
      </div>
    </>
  );
};

export default Shop;
