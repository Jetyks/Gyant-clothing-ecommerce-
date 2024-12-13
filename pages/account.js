import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Account = () => {
  const { user, loading, isLoggedIn, setIsLoggedIn, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, loading]);

  if (loading) return <p>Cargando...</p>;
  if (!isLoggedIn) return null; // Evitar renderizar contenido antes de la redirección
  console.log(user)

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token de localStorage
    setUser(null); // Limpia el usuario del contexto
    setIsLoggedIn(false); // Cambia el estado de isLoggedIn a false
  };

  return (
    <div>
      <h1>Bienvenido, {user.username || "Anonimo"}</h1>
      <button className="bg-slate-300" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Account;
