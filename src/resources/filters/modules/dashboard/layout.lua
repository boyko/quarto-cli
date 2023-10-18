-- layout.lua
-- Copyright (C) 2020-2022 Posit Software, PBC

-- Layout classes
local kRowsClass = "rows"
local kColumnsClass = "columns"
local kLayoutClz = pandoc.List({kRowsClass, kColumnsClass})

-- Layout options
local kLayoutHeight = "height"
local kLayoutWidth = "width"
local kLayout = "layout"         -- fill, flow, nil

-- Layout values
local kLayoutFill = "fill"
local kLayoutFlow = "flow"

local kOptionClasses = "classes"


local function isRowOrColContainer(el) 
  return el.classes ~= nil and (el.classes:includes(kRowsClass) or el.classes:includes(kColumnsClass))
end

local function validateLayout(options)
  if options[kLayout] ~= nil then
    if options[kLayout] ~= kLayoutFill and options[kLayout] ~= kLayoutFlow then
      error("Layout must be either fill or flow.")
    end
  end
end

local function readOptions(el)

  local options = {}
  local clz = el.attr.classes;

  -- Read classes to determine fill or flow (or auto if omitted)
  if clz:includes(kLayoutFill) then
    options[kLayout] = kLayoutFill
  elseif clz:includes(kLayoutFlow) then
    options[kLayout] = kLayoutFlow;
  end

  -- Read explicit height or width
  options[kLayoutHeight] = el.attributes[kLayoutHeight];  
  options[kLayoutWidth] = el.attributes[kLayoutWidth];

  -- Does the column have a sidebar class decorating it?
  local classes = clz:filter(function(class)
    return not kLayoutClz:includes(class)
  end)
  options[kOptionClasses] = classes

  return options;
end

local function makeOptions(filling) 
  local options = {}
  if filling == true then
    options[kLayout] = kLayoutFill
  else
    options[kLayout] = kLayoutFlow
  end
  return options;
end

local function makeColumnContainer(content, options)

  -- cols can't have height
  validateLayout(options)
  if options[kLayoutHeight] ~= nil then
    fail("Columns are not allowed to specify their height - they always fill their container.")
  end

  -- forward the options onto attributes
  local attributes = {}
  for k,v in pairs(options) do
    if k ~= kOptionClasses then
      attributes["data-" .. k] = v
    end
  end

  -- the classes
  local classes = pandoc.List({kRowsClass})
  if options[kOptionClasses] ~= nil then
    classes:extend(options[kOptionClasses])
  end

  return pandoc.Div(content, pandoc.Attr("", classes, attributes))
end

local function makeRowContainer(content, options) 
  
  -- rows can't have width
  validateLayout(options)
  if options[kLayoutWidth] ~= nil then
    fail("Rows are not allowed to specify their width - they always fill their container.")
  end

  -- forward attributes along
  local attributes = {}
  for k,v in pairs(options) do
    if k ~= kOptionClasses then
      attributes["data-" .. k] = v
    end
  end

  -- the classes
  local classes = pandoc.List({kColumnsClass})
  if options[kOptionClasses] ~= nil then
    classes:extend(options[kOptionClasses])
  end

  return pandoc.Div(content, pandoc.Attr("", classes, attributes))
end


return {
  isRowOrColContainer = isRowOrColContainer,
  makeColumnContainer = makeColumnContainer,
  makeRowContainer = makeRowContainer,
  readOptions = readOptions,
  makeOptions = makeOptions
}