import { CountryModel } from "../models/getPaisResponseData.model";

const CountryDetails = ({ country }: { country: CountryModel }) => {
  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">
        Detalles del País
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Moneda</h3>
            {country.currencies ? (
              <h3
                className="text-white bg-black/25 rounded-xl mt-1 p-2"
                aria-label={`Moneda: ${
                  country.currencies[`${Object?.keys(country.currencies)?.[0]}`]
                }`}
              >
                {
                  country.currencies[`${Object?.keys(country.currencies)?.[0]}`]
                    .name
                }
              </h3>
            ) : (
              <h3 className="text-white bg-black/25 rounded-xl mt-1 p-2">
                No registra
              </h3>
            )}
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Región</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 p-2"
              aria-label={`Región: ${country.region}`}
            >
              {country.region}
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Capital</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 p-2"
              aria-label={`Capital: ${country.capital}`}
            >
              {country.capital}
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Área</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 p-2 px-2"
              aria-label={`Área: ${country.area}`}
            >
              {country.area} km²
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
