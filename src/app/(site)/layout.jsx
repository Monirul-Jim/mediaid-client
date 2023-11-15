import Header from "@/components/header/header"
import SubNav from "@/components/header/sub_nav/subNav"
import MobileNavBar from "@/components/mobile/navigation/MobileNavBar"
import TabNavigation from "@/components/mobile/navigation/TabNavigation"
import AbsoluteCart from "@/components/pages/cart/AbsoluteCart"
import CartDetails from "@/components/pages/cart/CartDetails"
import ChildrenWrapper from "@/components/wrapper/childrenWrapper"

function Layout({ children }) {

    return (
        <>
            {/* Top-bar */}
            <div className="md:sticky top-0 z-50">
                {/* for desktop view */}
                <div className="hidden md:block">
                    <Header />
                    <SubNav />
                </div>
                {/* for render only mobile devices */}
                <div className="md:hidden">
                    <MobileNavBar />
                </div>
            </div>

            {/* Bottom tabs for mobile */}
            <TabNavigation />

            {/* Cart Modal */}
            <div className="right-0 fixed flex top-2/4 mr-2 z-50">
                <AbsoluteCart />
            </div>
            <div className="right-0 fixed mr-2 z-50 top-24 ">
                <CartDetails />
            </div>

            {/*  Side bar and Body */}
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </>
    )
}

export default Layout