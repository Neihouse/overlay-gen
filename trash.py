import os

# Define the TypeScript code as a string
auth_context_code = """
import {{ createContext, useContext, useState, ReactNode }} from 'react';

interface AuthContextType {{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({{ children }}: {{ children: ReactNode }}) {{
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {{children}}
    </AuthContext.Provider>
  );
}}

export const useAuth = () => useContext(AuthContext);
""".strip()

# Directory where the file should be placed
directory = "contexts"

# Ensure the directory exists
if not os.path.exists(directory):
    os.makedirs(directory)

# Path to the file
file_path = os.path.join(directory, "AuthContext.tsx")

# Write the code to the file
with open(file_path, "w") as file:
    file.write(auth_context_code)

print(f"AuthContext.tsx has been created in {directory}/")