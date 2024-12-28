"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { login } from "../api/api";
import Cookies from "js-cookie";

import LoadingButton from "@mui/lab/LoadingButton";

export default function ApiKeyForm() {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setApiKey(e.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    if (apiKey.length === 0) {
      setError(true);
      setLoading(false);
      return;
    }
    const result = await login(apiKey);

    Cookies.set("apiKey", apiKey);
    console.log(result);
    setLoading(false);
  };
  const size = "56px";
  return (
    <div className="flex items-center">
      <Box>
        <TextField
          id="api-key"
          label="API Key"
          variant="outlined"
          type="password"
          onChange={handleChange}
          error={error}
          helperText={error ? "Insira sua API Key" : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: size,
              minWidth: "200px",
              "& .MuiOutlinedInput-input": {
                color: "#000",
              },
            },
          }}
        />
      </Box>
      <Box ml={2}>
        <LoadingButton
          variant="outlined"
          onClick={handleLogin}
          sx={{
            height: size,
            minWidth: "90px",
            marginBottom: error ? "22px" : "0",
            color: "#000",
            backgroundColor: "#000",
          }}
          loading={loading}
        >
          {loading ? "" : "Login"}
        </LoadingButton>
      </Box>
    </div>
  );
}
