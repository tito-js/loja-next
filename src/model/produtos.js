import supabase from "./supabase"

export async function buscaTodos(){
    const resposta = await supabase.from("produtos").select();
    return resposta;
}

export async function busca( id ){
    const resposta = await supabase.from("produtos").select().eq("id", id);
    return resposta;
}