import React from "react";

const utilisateurs = [
  { id: 1, nom: "Ahmed Ben Salah", email: "ahmed@gmail.com", rôle: "Patient" },
  { id: 2, nom: "Dr. Selma Kefi", email: "selma@med.tn", rôle: "Médecin" },
  { id: 3, nom: "Nour Ayari", email: "nour@assist.tn", rôle: "Assistant" },
];

function ListeUtilisateurs() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Liste des utilisateurs</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-gray-800 text-left text-sm">
          <thead className="bg-gray-700 text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Nom</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Rôle</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((user) => (
              <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-600">
                <td className="px-6 py-4">{user.nom}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.rôle}</td>
                <td className="px-6 py-4">
                  <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListeUtilisateurs;
