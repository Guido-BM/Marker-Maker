import React from "react";
import {
  FaBold,
  FaItalic,
  FaList,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaPalette,
  FaHighlighter,
} from "react-icons/fa";
import { MdUndo, MdRedo } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const Texter = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">Texter</h1>
      <div className="style-bar flex flex-wrap bg-gray-200 p-4 space-x-2 space-y-2 overflow-auto">
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaBold />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaItalic />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaList />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaAlignLeft />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaAlignCenter />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaAlignRight />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaAlignJustify />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaPalette />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <FaHighlighter />
          </button>
        </div>
        <div className="flex space-x-2">
          <select className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <option>Font</option>
            <option>Arial</option>
            <option>Verdana</option>
            <option>Times New Roman</option>
            <option>Georgia</option>
            <option>Comic Sans MS</option>
            <option>Impact</option>
            <option>Lucida Console</option>
            <option>Trebuchet MS</option>
          </select>
          <select className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <option>Font Size</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>24</option>
            <option>26</option>
            <option>28</option>
            <option>30</option>
            <option>32</option>
            <option>34</option>
            <option>36</option>
            <option>38</option>
            <option>40</option>
          </select>
          <select className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <option>Line Height</option>
            <option>1</option>
            <option>1.2</option>
            <option>1.4</option>
            <option>1.6</option>
            <option>1.8</option>
            <option>2</option>
          </select>
          <select className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <option>Letter Spacing</option>
            <option>1</option>
            <option>1.2</option>
            <option>1.4</option>
            <option>1.6</option>
            <option>1.8</option>
            <option>2</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <MdUndo />
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <MdRedo />
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            <IoMdDownload />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            Save
          </button>
          <button className="px-2 py-1 bg-white border rounded shadow hover:bg-gray-100">
            Clear
          </button>
        </div>
      </div>
      <div className="text-box p-4">
        <textarea
          className="w-full h-full bg-gray-100 p-4"
          placeholder="Type something..."
        ></textarea>
      </div>
    </>
  );
};

export default Texter;
