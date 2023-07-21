import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const {currentLesson, currentModule} = useCurrentLesson()
  const isloading = useStore(store => store.isLoading)

  if(isloading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }
  
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">{currentModule?.title}</span>
    </div>
  );
}