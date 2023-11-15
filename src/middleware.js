import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Routing access to call
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log(token);
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/account"],
};
