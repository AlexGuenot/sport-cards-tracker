export default function Home() {
  return (

    // Conteneur principal qui centre le tableau au milieu de l'écran
    <div className="flex flex-col items-center min-h-[calc(100vh-8rem)] w-full px-4">
      {/* Header à l'intérieur du bloc */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold tracking-wide">Mes Collections NBA</h1>
        <p className="text-xs opacity-60">Suivi global de mes classeurs et complétion</p>
      </div>
      {/* Le bloc du tableau */}
      <div className="w-full max-w-4xl bg-transparent border-4 border-base-content/20 rounded-2xl p-6 shadow-xl mt-32">
        <table className="table w-full align-middle">
          <thead>
            <tr className="border-b border-base-content/10 text-base">
              <th>Collection</th>
              <th>Éditeur</th>
              <th className="w-1/2">Progression</th>
              <th className="text-center">Cartes</th>
            </tr>
          </thead>
          <tbody>
            {/* Collection 1 */}
            <tr className="border-b border-base-content/5 hover:bg-base-content/5 cursor-pointer transition-colors">
              <td>
                <div className="font-bold text-lg">NBA Hoops 2025-26</div>
                <div className="text-xs opacity-50 font-mono">Base Set + Inserts</div>
              </td>
              <td>
                <span className="badge badge-outline border-base-content/30 font-medium">Topps</span>
              </td>
              <td>
                <div className="flex flex-col gap-1">
                  <progress className="progress progress-success w-full h-3" value="65" max="100"></progress>
                  <span className="text-xs font-mono font-semibold text-success">65% complété</span>
                </div>
              </td>
              <td className="text-center font-mono font-bold text-lg">
                195 <span className="text-xs opacity-40 font-normal">/ 300</span>
              </td>
            </tr>

            {/* Collection 2 */}
            <tr className="border-b border-base-content/5 hover:bg-base-content/5 cursor-pointer transition-colors">
              <td>
                <div className="font-bold text-lg">Donruss NBA 2025</div>
                <div className="text-xs opacity-50 font-mono">Futur classeur</div>
              </td>
              <td>
                <span className="badge badge-outline border-base-content/30 font-medium">Panini</span>
              </td>
              <td>
                <div className="flex flex-col gap-1">
                  <progress className="progress progress-warning w-full h-3" value="12" max="100"></progress>
                  <span className="text-xs font-mono font-semibold text-warning">12% complété</span>
                </div>
              </td>
              <td className="text-center font-mono font-bold text-lg">
                36 <span className="text-xs opacity-40 font-normal">/ 300</span>
              </td>
            </tr>

            {/* Collection 3 */}
            <tr className="border-b border-base-content/5 hover:bg-base-content/5 cursor-pointer transition-colors">
              <td>
                <div className="font-bold text-lg">Bowman University 2025</div>
                <div className="text-xs opacity-50 font-mono">Rookies (Cooper Flagg...)</div>
              </td>
              <td>
                <span className="badge badge-outline border-base-content/30 font-medium">Topps</span>
              </td>
              <td>
                <div className="flex flex-col gap-1">
                  <progress className="progress w-full h-3 opacity-20" value="0" max="100"></progress>
                  <span className="text-xs font-mono font-semibold opacity-40">0% (Pas commencé)</span>
                </div>
              </td>
              <td className="text-center font-mono opacity-40 text-lg">
                0 <span className="text-xs opacity-40 font-normal">/ 150</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}