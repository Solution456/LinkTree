export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string | null
          id: number
          path: string 
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          path?: string 
          title?: string 
          user_id?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          path?: string
          title?: string 
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "links_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
