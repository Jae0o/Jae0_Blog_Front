import React, { useState } from "react";
import "../../../../CSS/EditPage/Editor/EditorPublicToggle.css";
import { OnChangeEventType } from "../../../../Types/EventTypes";
import { EditPublicToggleProps, EditorToggleChangeTextFunc } from "../../../../Types/Components/Edit/EditorTypes";

const EditorPublicToggle: React.FC<EditPublicToggleProps> = ({ state, onToggle }) => {
  const [isPublic, setIsPublic] = useState<boolean>(state);

  const onChangeToggle: OnChangeEventType = (e) => {
    setIsPublic(!isPublic);
    onToggle("isPublic", !isPublic);
  };

  return (
    <div className="Editor__public-box">
      <input
        className="public__checkbox"
        id="publicToggleBox"
        type="checkbox"
        checked={isPublic}
        onChange={onChangeToggle}
      />
      <label htmlFor="publicToggleBox" className="public__action-bar">
        <div className="public__action-item">dd</div>
      </label>
      <label htmlFor="publicToggleBox" className="public__text">
        {toggleChangeText(isPublic)}
      </label>
    </div>
  );
};

export default EditorPublicToggle;

const toggleChangeText: EditorToggleChangeTextFunc = (isPublic) => {
  if (isPublic) {
    return "공개 상태";
  }
  return "비공개 상태";
};
