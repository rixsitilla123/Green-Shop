"use client"
import React, { ReactNode, SetStateAction, createContext, useState } from "react";

interface ContextType {
	token: string | null,
	setToken: React.Dispatch<SetStateAction<string | null>>
}

export const Context = createContext<ContextType>({
	token: null,
	setToken: () => ""
})

export const AuthContext: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [token, setToken] = useState<string | null>(localStorage.getItem("token") || null)
	if(token) localStorage.setItem("token", token)
	return (
		<Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
	)
}