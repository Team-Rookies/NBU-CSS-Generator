<?php

abstract class StyleType extends Enum {
    const Border = "Border radius";
    const Box = "Box Shadow";
    const Text = "Text shadow";
    const RGBA = "RGBA";
    const Font = "Font face";
    const Columns = "Multiple Columns";
    const BoxResize = "Box resize";
    const BoxSizing = "Box sizing";
    const Outline = "Outline";
    const Transition = "Transition";
    const Transform = "Transform";
}

abstract class Enum {
    static function getKeys(){
        $class = new ReflectionClass(get_called_class());
        return array_keys($class->getConstants());
    }
}