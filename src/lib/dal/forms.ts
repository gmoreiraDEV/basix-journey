import { supabaseServer } from '../supabase'
import type { Database } from '../db.types'

type Form = Database['public']['Tables']['forms']['Row']
type NewForm = Database['public']['Tables']['forms']['Insert']

export async function getFormsByUser(userId: string): Promise<Form[]> {
    const { data, error } = await supabaseServer
        .from('forms')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

    if (error) throw error
    return data ?? []
}

export async function createForm(form: NewForm): Promise<Form> {
    const { data, error } = await supabaseServer
        .from('forms')
        .insert(form)
        .select()
        .single()

    if (error) throw error
    return data
}