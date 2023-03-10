import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import Todo from "./Todo";
import { useState } from "react";

const Mokuhyoutaizyuu = ({ targetdiet, setTargetdiet }) => {
  // localStorage.getItem("todos")
  //   ? JSON.parse(lo calStorage.getItem("todos"))
  //   : [];
  const [InputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (InputText === "") {
      alert("空文字列は受理できない！");
    } else {
      setTargetdiet(InputText);
    }
    setInputText("");
  };

  return (
    <Box sx={{ p: 2, border: "2px dashed grey" }} className="bg-gray-100">
      <Typography style={{ fontFamily: "GungsuhChe" }}>
        目標体重の入力
      </Typography>
      <TextField
        size="small"
        value={InputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        sx={{ width: 100 }}
      />
      <Button
        className="bg-gradient-to-b from-slate-700 to-slate-500"
        onClick={handleAddTodo}
        variant="outlined"
      >
        <p className="text-white">追加</p>
      </Button>
      <List
        sx={{ overflow: "auto", maxHeight: "100px" }}
        style={{ listStyle: "none" }}
      >
        {/* {todos.map((item, index) => {
            return (
              <ListItem key={index}>
                <Todo content={item.content} />
              </ListItem>
            );
          })} */}
        <ListItem>
          <Todo content={targetdiet} />
        </ListItem>
      </List>
    </Box>
  );
};
export default Mokuhyoutaizyuu;
