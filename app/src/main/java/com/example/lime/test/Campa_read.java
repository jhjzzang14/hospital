package com.example.lime.test;

import android.app.Activity;
import android.os.Bundle;

/**
 * Created by lime on 2016-05-23.
 */
public class Campa_read extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.campa_read_layout);
    }
    @Override
    public void onBackPressed() {
        Tab_campaign parent = ((Tab_campaign)getParent());
        parent.onBackPressed();
    }
}
