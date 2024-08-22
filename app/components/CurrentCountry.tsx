import { CountryModel } from "../models/getPaisResponseData.model";
import { MdLocationOn } from "react-icons/md";

const CurrentCountry = ({ country }: { country: CountryModel }) => {
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white"> {country.name.common}</h1>
        </div>
      </div>
      <div>
        {country.name ? (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <MdLocationOn />
            <span>{country.name.official}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentCountry;
