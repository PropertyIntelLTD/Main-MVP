
import { supabase } from "@/lib/supabase";

// Properties API
export const fetchProperties = async (userId, role) => {
  let query = supabase.from("properties").select(`
    *,
    landlord:landlord_id(name),
    agent:agent_id(name)
  `);
  
  if (role === "landlord") {
    query = query.eq("landlord_id", userId);
  } else if (role === "agent") {
    query = query.eq("agent_id", userId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
};

export const createProperty = async (propertyData) => {
  const { data, error } = await supabase
    .from("properties")
    .insert([propertyData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateProperty = async (id, propertyData) => {
  const { data, error } = await supabase
    .from("properties")
    .update(propertyData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Blogs API
export const fetchBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select(`
      *,
      author:author_id(name)
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const createBlog = async (blogData) => {
  const { data, error } = await supabase
    .from("blogs")
    .insert([blogData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBlog = async (id, blogData) => {
  const { data, error } = await supabase
    .from("blogs")
    .update(blogData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Auth API
export const loginUser = async (email, password) => {
  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      if (authError.message.includes("Invalid login")) {
        throw new Error("Invalid email or password. Please check your credentials and try again.");
      }
      throw authError;
    }

    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', authData.user.id)
      .single();

    if (userError) {
      throw new Error("User account not found. Please contact support.");
    }

    return { ...authData.user, ...userData };
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (authError) throw authError;

  const { data: profileData, error: profileError } = await supabase
    .from('users')
    .insert([
      {
        id: authData.user.id,
        email: userData.email,
        name: userData.name,
        role: userData.role,
      }
    ])
    .select()
    .single();

  if (profileError) throw profileError;

  return { ...authData.user, ...profileData };
};
