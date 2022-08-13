import Header from '~/components/Layout/components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="contaner">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
