export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      boards: {
        Row: {
          columns: string | null;
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          columns?: string | null;
          created_at?: string;
          id?: string;
          name?: string;
        };
        Update: {
          columns?: string | null;
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "boards_columns_fkey";
            columns: ["columns"];
            referencedRelation: "columns";
            referencedColumns: ["id"];
          }
        ];
      };
      columns: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          tasks: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string;
          tasks?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          tasks?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "columns_tasks_fkey";
            columns: ["tasks"];
            referencedRelation: "tasks";
            referencedColumns: ["id"];
          }
        ];
      };
      tasks: {
        Row: {
          assigned_to: string[] | null;
          comments: string[] | null;
          completed: boolean;
          created_at: string;
          description: string | null;
          due_date: string | null;
          id: string;
          priority: string | null;
          status: string;
          tags: string[] | null;
          title: string;
        };
        Insert: {
          assigned_to?: string[] | null;
          comments?: string[] | null;
          completed?: boolean;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          priority?: string | null;
          status?: string;
          tags?: string[] | null;
          title?: string;
        };
        Update: {
          assigned_to?: string[] | null;
          comments?: string[] | null;
          completed?: boolean;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          priority?: string | null;
          status?: string;
          tags?: string[] | null;
          title?: string;
        };
        Relationships: [];
      };
      todos: {
        Row: {
          created_at: string;
          id: string;
          is_complete: boolean | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_complete?: boolean | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_complete?: boolean | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
