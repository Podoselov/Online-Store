import axios from 'axios';

const getSearchProducts = async (
  search,
  genderCategory = [],
  priceCategory = '',
  brandCategory = [],
  statusPrice = '',
  page = 1
) => {
  let mainPath = `http://localhost:5000/products?_page=${page}&_limit=9`;

  if (search)
    mainPath = `http://localhost:5000/products?_page=${page}&_limit=9&q=${search}`;

  if (genderCategory.length > 0)
    mainPath = `http://localhost:5000/products?${genderCategory.join(
      ''
    )}&_page=${page}&_limit=9`;

  if (priceCategory.length > 0)
    mainPath = `http://localhost:5000/products?${priceCategory}&_page=${page}&_limit=9`;

  if (brandCategory.length > 0)
    mainPath = `http://localhost:5000/products?brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?${statusPrice}&_page=${page}&_limit=9`;

  if (search && genderCategory.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&_page=${page}&_limit=9`;

  if (search && priceCategory.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}&${priceCategory}&_page=${page}&_limit=9`;

  if (search && brandCategory.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}&brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (search && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}&${statusPrice}&_page=${page}&_limit=9`;

  if (priceCategory.length > 0 && genderCategory.length > 0)
    mainPath = `http://localhost:5000/products?${priceCategory}${genderCategory.join(
      ''
    )}&_page=${page}&_limit=9`;

  if (priceCategory.length > 0 && brandCategory.length > 0)
    mainPath = `http://localhost:5000/products?${priceCategory}&brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (priceCategory.length > 0 && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?${priceCategory}&${statusPrice}&_page=${page}&_limit=9`;

  if (genderCategory.length > 0 && brandCategory.length > 0)
    mainPath = `http://localhost:5000/products?brand=${brandCategory.join(
      '&brand='
    )}${genderCategory.join('')}&_page=${page}&_limit=9`;

  if (genderCategory.length > 0 && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?${statusPrice}${genderCategory.join(
      ''
    )}&_page=${page}&_limit=9`;

  if (brandCategory.length > 0 && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?${statusPrice}&brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (search && genderCategory.length > 0 && priceCategory.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${priceCategory}&_page=${page}&_limit=9`;

  if (search && genderCategory.length > 0 && brandCategory.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&brand=${brandCategory.join('&brand=')}&_page=${page}&_limit=9`;

  if (search && genderCategory.length > 0 && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${statusPrice}&_page=${page}&_limit=9`;

  if (search && brandCategory.length > 0 && statusPrice.length > 0)
    mainPath = `http://localhost:5000/products?q=${search}&brand=${brandCategory.join(
      '&brand='
    )}&${statusPrice}&_page=${page}&_limit=9`;

  if (
    brandCategory.length > 0 &&
    genderCategory.length > 0 &&
    priceCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?brand=${brandCategory.join(
      '&brand='
    )}${genderCategory.join('')}&${priceCategory}&_page=${page}&_limit=9`;

  if (
    statusPrice.length > 0 &&
    genderCategory.length > 0 &&
    priceCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?${statusPrice}${genderCategory.join(
      ''
    )}&${priceCategory}&_page=${page}&_limit=9`;

  if (
    statusPrice.length > 0 &&
    brandCategory.length > 0 &&
    priceCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?${statusPrice}&brand=${brandCategory.join(
      '&brand='
    )}&${priceCategory}&_page=${page}&_limit=9`;

  if (
    statusPrice.length > 0 &&
    brandCategory.length > 0 &&
    genderCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?${statusPrice}&brand=${brandCategory.join(
      '&brand='
    )}${genderCategory.join('')}&_page=${page}&_limit=9`;

  if (
    search &&
    genderCategory.length > 0 &&
    statusPrice.length > 0 &&
    brandCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${statusPrice}&brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (
    search &&
    genderCategory.length > 0 &&
    priceCategory.length > 0 &&
    brandCategory.length > 0
  )
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${priceCategory}&brand=${brandCategory.join(
      '&brand='
    )}&_page=${page}&_limit=9`;

  if (
    search &&
    genderCategory.length > 0 &&
    priceCategory.length > 0 &&
    statusPrice.length > 0
  )
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${priceCategory}&${statusPrice}&_page=${page}&_limit=9`;

  if (
    search &&
    brandCategory.length > 0 &&
    priceCategory.length > 0 &&
    statusPrice.length > 0
  )
    mainPath = `http://localhost:5000/products?q=${search}&brand=${brandCategory.join(
      '&brand='
    )}&${priceCategory}&${statusPrice}&_page=${page}&_limit=9`;

  if (
    genderCategory.length > 0 &&
    brandCategory.length > 0 &&
    priceCategory.length > 0 &&
    statusPrice.length > 0
  )
    mainPath = `http://localhost:5000/products?brand=${brandCategory.join(
      '&brand='
    )}${genderCategory.join(
      ''
    )}&${priceCategory}&${statusPrice}&_page=${page}&_limit=9`;

  if (
    search &&
    genderCategory.length > 0 &&
    priceCategory.length > 0 &&
    brandCategory.length > 0 &&
    statusPrice.length > 0
  )
    mainPath = `http://localhost:5000/products?q=${search}${genderCategory.join(
      ''
    )}&${priceCategory}&brand=${brandCategory.join(
      '&brand='
    )}&${statusPrice}&_page=${page}&_limit=9`;

  try {
    const response = await axios.get(mainPath);

    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
    };
  } catch (error) {
    return console.log(error);
  }
};

export default getSearchProducts;
