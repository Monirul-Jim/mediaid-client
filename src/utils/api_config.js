// CSR Hooks fetch request methods
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// SSR Render data request methods
export async function getProducts(pathname) {
  try {
    // get product
    const result = await fetch(process.env.NEXTAUTH_URL + pathname, {
      method: "GET",
    });
    const data = await result.json(); // parse to json
    // checking actual data
    if (data?.success) {
      return data?.product;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

// SSR Render data request methods
export async function getReviews(pathname) {
  try {
    // get product
    const result = await fetch(process.env.NEXTAUTH_URL + pathname, {
      method: "GET",
    });
    const data = await result.json(); // parse to json
    // checking actual data
    if (data?.success) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
