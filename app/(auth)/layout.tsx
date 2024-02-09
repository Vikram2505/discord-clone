export const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <aside className="bg-gray-800 h-full flex items-center justify-center">
            {children}
        </aside>
    )
}

export default AuthLayout;