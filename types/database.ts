export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dailylog_tasks: {
        Row: {
          dailylog_id: number
          id: number
          task_id: number
        }
        Insert: {
          dailylog_id: number
          id?: number
          task_id: number
        }
        Update: {
          dailylog_id?: number
          id?: number
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "dailylog_tasks_dailylog_id_fkey"
            columns: ["dailylog_id"]
            isOneToOne: false
            referencedRelation: "dailylogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dailylog_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      dailylogs: {
        Row: {
          date: string
          description: string | null
          id: number
          title: string
          user_id: string | null
        }
        Insert: {
          date?: string
          description?: string | null
          id?: number
          title?: string
          user_id?: string | null
        }
        Update: {
          date?: string
          description?: string | null
          id?: number
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dailylogs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_members: {
        Row: {
          id: number
          project_id: number
          role: string | null
          user_id: string
        }
        Insert: {
          id?: number
          project_id: number
          role?: string | null
          user_id: string
        }
        Update: {
          id?: number
          project_id?: number
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          due_date: string | null
          id: number
          status: string | null
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          status?: string | null
          title?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          status?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sprint_tasks: {
        Row: {
          id: number
          sprint_id: number
          task_id: number
        }
        Insert: {
          id?: number
          sprint_id: number
          task_id: number
        }
        Update: {
          id?: number
          sprint_id?: number
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sprint_tasks_sprint_id_fkey"
            columns: ["sprint_id"]
            isOneToOne: false
            referencedRelation: "sprints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sprint_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      sprints: {
        Row: {
          end_date: string
          id: number
          start_date: string
          tasks: number[] | null
          title: string
        }
        Insert: {
          end_date?: string
          id?: number
          start_date?: string
          tasks?: number[] | null
          title?: string
        }
        Update: {
          end_date?: string
          id?: number
          start_date?: string
          tasks?: number[] | null
          title?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_to: string | null
          comments: string[] | null
          created_at: string
          description: string | null
          due_date: string | null
          id: number
          priority: string | null
          project_id: number | null
          status: string
          tags: string[] | null
          title: string
        }
        Insert: {
          assigned_to?: string | null
          comments?: string[] | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: number
          priority?: string | null
          project_id?: number | null
          status?: string
          tags?: string[] | null
          title?: string
        }
        Update: {
          assigned_to?: string | null
          comments?: string[] | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: number
          priority?: string | null
          project_id?: number | null
          status?: string
          tags?: string[] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
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
