export default function Container({ children }) {
        return (
                <div className="container flex flex-col justify-center my-8 gap-8 max-w-2xl">
                        {children}
                </div>
        )
}